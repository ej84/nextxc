import {
  BookmarkBorder,
  Brightness5Outlined,
  EmailOutlined,
  ExpandMore,
  GroupOutlined,
  House,
  ListAltOutlined,
  NotificationsOutlined,
  PersonOutlineOutlined,
  Search,
} from "@mui/icons-material";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="grid grid-rows-11">
        <button className="sidebutton">
          <House fontSize="large" className="mr-3" />
          <p className="text-2xl focus:font-bold pr-3 mt-0.5">Home</p>
        </button>
        <button className="sidebutton">
          <Search fontSize="large" className="mr-3" />
          <p className="text-2xl focus:font-bold pr-3 mt-0.5">Explore</p>
        </button>
        <button className="sidebutton">
          <NotificationsOutlined fontSize="large" className="mr-3" />
          <p className="text-2xl focus:font-bold pr-3 mt-0.5">Notifications</p>
        </button>
        <button className="sidebutton">
          <EmailOutlined fontSize="large" className="mr-3" />
          <p className="text-2xl focus:font-bold pr-3 mt-0.5">Messages</p>
        </button>
        <button className="sidebutton">
          <ListAltOutlined fontSize="large" className="mr-3" />
          <p className="text-2xl focus:font-bold pr-3 mt-0.5">Lists</p>
        </button>
        <button className="sidebutton">
          <BookmarkBorder fontSize="large" className="mr-3" />
          <p className="text-2xl focus:font-bold pr-3 mt-0.5">Bookmarks</p>
        </button>
        <button className="sidebutton">
          <GroupOutlined fontSize="large" className="mr-3" />
          <p className="text-2xl focus:font-bold pr-3 mt-0.5">Communities</p>
        </button>
        <button className="sidebutton">
          <Brightness5Outlined fontSize="large" className="mr-3" />
          <p className="text-2xl focus:font-bold pr-3 mt-0.5">Premium</p>
        </button>
        <button className="sidebutton">
          <PersonOutlineOutlined fontSize="large" className="mr-3" />
          <p className="text-2xl focus:font-bold pr-3 mt-0.5">Profile</p>
        </button>
        <button className="sidebutton">
          <ExpandMore fontSize="large" className="mr-3" />
          <p className="text-2xl focus:font-bold pr-3 mt-0.5">More</p>
        </button>
      </div>
    </main>
  );
}
