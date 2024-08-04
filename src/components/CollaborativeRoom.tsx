'use client'

import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import { ClientSideSuspense, LiveblocksProvider, RoomProvider } from '@liveblocks/react/suspense'
import React, { use, useEffect, useRef, useState } from 'react'
import Header from './Header'
import { Editor } from './editor/Editor'
import ActiveCollaboraters from './ActiveCollaboraters'
import { Input } from './ui/input'
import { currentUser } from '@clerk/nextjs/server'
import Image from 'next/image'
import { updateDocument } from '@/lib/actions/room.actions'
import Loader from './Loader'
import ShareModal from './ShareModal'

const CollaborativeRoom = ({ roomId, roomMetadata,users,currentUserType }: CollaborativeRoomProps) => {


    const [documentTitle, setDocumentTitle] = useState(roomMetadata.title)
    const [editing, setEditing] = useState(false)
    const [loading, setLoading] = useState(false)

    const constainerRef = useRef<HTMLDivElement>(null)
    const inputRef = useRef<HTMLInputElement>(null)

    const updateTitleHandler = async (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            setLoading(true)
            try {

                if (documentTitle !== roomMetadata.title) {
                    const updatedDocument = await updateDocument(roomId, documentTitle)
                }

            } catch (error) {
                console.log(`Error updating document title: ${error}`)

            }
          //  setEditing(false)
            //setLoading(false)
        }
    }

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (constainerRef.current && !constainerRef.current.contains(e.target as Node)) {
                setEditing(false)
                updateDocument(roomId, documentTitle)
            }

        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [roomId, documentTitle])


    useEffect(() => {
        if (editing && inputRef.current) {
            inputRef.current.focus()
        }
    }, [editing])

    return (
        <RoomProvider id={roomId}>
            <ClientSideSuspense fallback={ <Loader/>}>
                <div className='collaborative-room'>
                    <Header>
                        <div ref={constainerRef} className='flex w-fit items-center justify-center gap-2'>
                            {editing && !loading ? (
                                <Input
                                    type='text'
                                    value={documentTitle}
                                    ref={inputRef}
                                    placeholder='Document Title'
                                    onChange={(e) => setDocumentTitle(e.target.value)}
                                    onKeyDown={updateTitleHandler}
                                    disabled={!editing}
                                    className='document-title-input'

                                />) :

                                (<>
                                    <p className='document.title'>{documentTitle}</p>
                                </>)}

                            {currentUserType === 'editor' && !editing && (
                                <Image
                                    src={"/assets/icons/edit.svg"}
                                    alt='edit'
                                    width={24}
                                    height={24}
                                    onClick={() => setEditing(true)}
                                    className='pointer'
                                />)}

                            {currentUserType !== 'editor' && !editing && (
                                <p className='view-only-tag'> VIEW ONLY</p>
                            )}
                            {loading && <p className='text-sm text-gray-400'>saving...</p>}




                        </div>
                        <div className="flex , w-full, flex-1 justify-end gap-2 sm:gap-3">
                            <ActiveCollaboraters />
                            <ShareModal 
                            roomId={roomId} 
                            collaborators={users}
                            creatorId={roomMetadata.creatorId}
                            currentUserType={currentUserType}
                            />
                            <SignedOut>
                                <SignInButton />
                            </SignedOut>
                            <SignedIn>
                                <UserButton />
                            </SignedIn>
                        </div>

                    </Header>
                    <Editor roomid ={roomId} 
                    currentUserType= {currentUserType}
                    />
                </div>
            </ClientSideSuspense>
        </RoomProvider>
    )
}

export default CollaborativeRoom