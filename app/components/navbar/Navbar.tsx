'use client';

import Container from "../Container";
import UserMenu from "./UserMenu";
import Logo from "./Logo";
import Search from "./Search";
import { IUser } from "./Interface";
import Categories from "./Categories";

const Navbar: React.FC<IUser> = ({ currentUser }: IUser) => {
    return (
        <div className="fixed w-full bg-white z-10 shadow-sm">
            <div className="py-4 border-b-[1px]">
                <Container>
                    <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
                        <Logo />
                        <Search />
                        <UserMenu currentUser={currentUser}/>
                    </div>
                </Container>
            </div>
            <Categories />
        </div>
    )
}

export default Navbar