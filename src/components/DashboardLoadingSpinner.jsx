import LoadingSpinner from "./LoadingSpinner";

export default function DashboardLoadingSpinner() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <LoadingSpinner colorCode={"#00a63e"} />
    </div>
  );
}
