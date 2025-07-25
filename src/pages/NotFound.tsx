import Layout from "@/Layout";

const NotFound = () => {
  return (
    <Layout>
      <div className="min-h-screen flex flex-col justify-center items-center">
        <h1 className="text-5xl lg:text-7xl font-bold">PageNot Found :(</h1>
        <p className="text-lg lg:text-2xl">
          Did you make a typo? Check the URL
        </p>
      </div>
    </Layout>
  );
};

export default NotFound;
