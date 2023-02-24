import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./Components/HomePage/HomePage";
import SignIn from "./pages/auth/signin/SignIn";
import SignUp from "./pages/auth/signup/SignUp";
import ProductDetails from "./pages/CartDetails/CartDetails";
import Purchase from "./pages/Checkout/PurchaseSuccess/Purchase";
import Review from "./pages/Checkout/ReviewOrder/Review";
import ShipingPayment from "./pages/Checkout/ShipingPage/ShipingPayment";
import Guest from "./pages/GuestCheckout/Guest";
import Layout from "./pages/MainLayoutRoutes/Layout";
import NewOrders from "./pages/PagesUser/NewOrders/NewOrders";
import WishList from "./pages/PagesUser/wishlist/WishList";
import ProductsPage from "./pages/Products/ProductsPage";
import ProfileUser from "./pages/profileUser/ProfileUser";
import Seller from "./pages/sellerProfile/Seller";
import ShoppingCart from "./pages/shoppingCart/ShoppingCart";
import TrackOrder from "./pages/TrackOrder/TrackOrder";
import UserLayout from "./pages/UserLayoutRoutes/UserLayout";

function App() {
  const MainRoutes = createBrowserRouter([
    // Routes Of main page
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/cottage",
          index: true,
          element: <HomePage />,
        },
        {
          path: "/shipping&payment",
          element: <ShipingPayment />,
        },
        {
          path: "/purchaseSuccess",
          element: <Purchase />,
        },
        {
          path: "/review",
          element: <Review />,
        },
        {
          path: "/TrackOrder",
          element: <TrackOrder />,
        },
        {
          path: "/productDetails",
          element: <ProductDetails />,
        },
        {
          path: "/shoppingCart",
          element: <ShoppingCart />,
        },
        {
          path: "/seller",
          element: <Seller />,
        },
        {
          path: "/guestCheckout",
          element: <Guest />,
        },
        {
          path: "/ProductsPage",
          element: <ProductsPage />,
        },
      ],
    },

    // Routes Of pages UserProfile
    {
      path: "/",
      element: <UserLayout />,
      children: [
        {
          path: "/profileUser",
          index: true,
          element: <ProfileUser />,
        },
        {
          path: "/wishlist",
          element: <WishList />,
        },
        {
          path: "/neworders",
          element: <NewOrders />,
        },
      ],
    },

    // Routes of auth
    {
      path: "/signin",
      element: <SignIn />,
    },
    {
      path: "/signup",
      element: <SignUp />,
    },
  ]);
  return (
    <>
      <RouterProvider router={MainRoutes} />
    </>
  );
}

export default App;
