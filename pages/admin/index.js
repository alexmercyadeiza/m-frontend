import Header from "../../components/admin/header";
import Home from "../../components/admin/home";
import Layout from "../../components/admin/layout";

export default function Admin() {
    return (
      <>
        <Header />
        <Layout>
            <Home />
        </Layout>
      </>
    );
}