import Menu from "@/components/menu";
import SideMenu from "@/components/SideMenu";
import TopMenu from "@/components/TopMenu";
export default function HomeLayout({children}:{children:React.ReactNode}) {
    return (
        <div>
            <Menu />
            <div className="pl-64 min-h-screen">
                {children}
            </div>
        </div>
    );
}