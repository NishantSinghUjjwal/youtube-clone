import Link from 'next/link'
import React from 'react'

const Sidebar = ({ open }: { open: boolean }) => {
    return (open ?
        <div className='flex flex-col gap-2 p-6 border-r'>
            <Link href={"/"}>Home</Link>
            <Link href={"/shorts"}>Shorts</Link>
            <Link href={"/feed/subscriptions"}>Subscriptions</Link>
        </div> :
        <div className='flex flex-col gap-2 p-6 border-r'>
            <Link href={"/"}>H</Link>
            <Link href={"/shorts"}>Sh</Link>
            <Link href={"/feed/subscriptions"}>Subs</Link>
        </div>
    )
}

export default Sidebar