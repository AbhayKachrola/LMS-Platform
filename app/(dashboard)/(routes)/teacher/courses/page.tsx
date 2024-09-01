import { Button } from "@/components/ui/button";
import Link from "next/link";

const CoutsesPage = () => {
    return (
        <div className="p-6">
            <Link href="/teacher/create">
            <Button className="bg-slate-300">
                New Course
            </Button>
            </Link>
        </div>
    );
}

export default CoutsesPage;