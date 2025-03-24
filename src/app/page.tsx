import Banner from "@/components/Banner";
import EditReservation from "@/components/EditReservation";
import Menu from "@/components/Menu";
import SideMenu from "@/components/SideMenu";
import TopMenu from "@/components/TopMenu";
export default function Home() {
  return (
    <div>
      {/* <SideMenu/>
      <TopMenu/> */}
      <Menu/>
      <div className="pl-70 min-h-screen">
          <Banner/>
      </div>
    </div>
  );
}
