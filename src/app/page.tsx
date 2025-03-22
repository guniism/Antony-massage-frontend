import Banner from "@/components/Banner";
import EditReservation from "@/components/EditReservation";
import SideMenu from "@/components/SideMenu";
import TopMenu from "@/components/TopMenu";
export default function Home() {
  return (
    <div>
      <SideMenu/>
      <TopMenu/>
      <div className="pl-64 min-h-screen">
          <Banner/>
      </div>
    </div>
  );
}
