import React from "react";
import CategoryList from "../components/CategoryList.tsx";
import Footer from "../components/Footer.tsx";
import Header from "../components/Header.tsx";
import SearchField from "../app/common/SearchField.tsx";
import ItemsPageFooter from "../components/ItemsPageFooter.tsx";
import ItemsList from "../components/ItemsList.tsx";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

const Home: React.FC = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <SearchField />
      <main className="flex-grow grid grid-cols-1 md:grid-cols-3 gap-4 p-4 pb-10">
        <section className="md:col-span-2 flex justify-center">
          <Routes>
            <Route path="/" element={<CategoryList />} />
            <Route path="/items/:categoryId" element={<ItemsList />} />
          </Routes>
        </section>
      </main>
      {location.pathname.startsWith("/items") ? (
        <ItemsPageFooter />
      ) : (
        <Footer />
      )}
    </div>
  );
};

export default Home;
