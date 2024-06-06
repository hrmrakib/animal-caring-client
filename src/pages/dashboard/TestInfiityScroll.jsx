import { useInfiniteQuery } from "@tanstack/react-query";

const getArticle = async ({ pageParam = 0 }) => {
  const res = await fetch(
    `https://api.realworld.io/api/articles?limit=10&offset=${pageParam}`
  );
  const data = res.json();
  return { ...data, prevOffset: pageParam };
};

const TestInfiityScroll = () => {
  const { data, fetchNextPage, hasNextPage } = useInfiniteQuery({
    queryKey: ["articles"],
    queryFn: getArticle,
    getNextPageParam: (lastPage) => {
      if (lastPage.prevOffset + 10 > lastPage.articlesCount) {
        return false;
      }
      return lastPage.prevOffset + 10;
    },
  });

  const articles = data?.pages.reduce((acc, page) => {
    return [...acc, ...page.articles];
  }, []);

  console.log(articles);

  return <div>TestInfiityScroll</div>;
};

export default TestInfiityScroll;
