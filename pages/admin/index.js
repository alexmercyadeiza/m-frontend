import Header from "../../components/admin/Header";
import Home from "../../components/admin/Home";
import Layout from "../../components/admin/Layout";

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