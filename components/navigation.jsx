import Link from "next/link"

function Nav() {
    return ( 
        <>
            <ul>
                <li>
                    <Link href='/'>home</Link>
                </li>
                <li>
                    <Link href='category'>category</Link>
                </li>
                <li>
                    <Link href='/dashboard'>Dashboard</Link>
                </li>
            </ul>
        </>
     );
}

export default Nav;