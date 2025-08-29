import dynamic from "next/dynamic";
import { Skeleton } from "@/components/ui/skeleton";

// Dynamically import CreatableSelect with SSR disabled
export const DynamicCreatableSelect = dynamic(
	() => import("react-select/creatable").then((mod) => mod.default),
	{
		loading: () => <Skeleton className="h-10 w-full bg-gray-700" />,
		ssr: false,
	}
);
