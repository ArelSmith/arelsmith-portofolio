import Button from "@/components/Button";
import Layout from "@/Layout";

const AboutMe = () => {
  return (
    <Layout>
      <div className="h-screen flex justify-center items-center">
        <h1 className="text-7xl font-bold">Test</h1>

        <Button href="/" text="Test" />
      </div>
    </Layout>
  );
};

export default AboutMe;
