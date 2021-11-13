import React from 'react';
import { AiTwotoneHome } from '@react-icons/all-files/ai/AiTwotoneHome';
import { HiOutlineHashtag } from '@react-icons/all-files/hi/HiOutlineHashtag';
import { IoMdNotificationsOutline } from '@react-icons/all-files/io/IoMdNotificationsOutline';
import { BiMessageSquareDetail } from '@react-icons/all-files/bi/BiMessageSquareDetail';
import { BsBookmark } from '@react-icons/all-files/bs/BsBookmark';
import { BsCardList } from '@react-icons/all-files/bs/BsCardList';
import { CgMoreO } from '@react-icons/all-files/cg/CgMoreO';
import SideBarList from './SideBarList';

function Menu() {
  return (
    <>
      <SideBarList active text="Home" Icon={AiTwotoneHome} />
      <SideBarList text="Explore" Icon={HiOutlineHashtag} />
      <SideBarList text="Notifications" Icon={IoMdNotificationsOutline} />
      <SideBarList text="Messages" Icon={BiMessageSquareDetail} />
      <SideBarList text="Bookmarks" Icon={BsBookmark} />
      <SideBarList text="Lists" Icon={BsCardList} />
      <SideBarList text="More" Icon={CgMoreO} />
    </>
  );
}

export default Menu;
