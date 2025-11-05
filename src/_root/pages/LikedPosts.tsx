import { GridPostList, Loader } from "@/components/shared";
import { useGetCurrentUser } from "@/lib/react-query/queries";

const LikedPosts = () => {
  const { data: currentUser } = useGetCurrentUser();

  if (!currentUser)
    return (
      <div className="flex-center w-full h-full bg-background text-foreground">
        <Loader />
      </div>
    );

  return (
    <div className="liked-posts-container bg-background text-foreground w-full max-w-5xl mx-auto">
      {currentUser.liked.length === 0 ? (
        <p className="text-light-4 mt-10 text-center w-full">No liked posts</p>
      ) : (
        <GridPostList posts={currentUser.liked} showStats={false} />
      )}
    </div>
  );
};

export default LikedPosts;
