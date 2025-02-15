import React, { Suspense, lazy, useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import TopMenu from "./components/TopMenu";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.min.css";
import { useDispatch } from "react-redux";
import { fetchProducts, fetchProductSizes } from "./reducers/product-thunk.ts";
import SubCategory from "./views/SubCategory.tsx";
import AuthModal from "./views/account/AuthModal.tsx";
import OtpAuthView from "./views/account/OtpAuthView.tsx";
import ProtectedRoute from "./components/ProtectedRoute.tsx";
//const Header = lazy(() => import("./components/Header"));
//const TopMenu = lazy(() => import("./components/TopMenu"));
const HomeView = lazy(() => import("./views/Home"));
const SignInView = lazy(() => import("./views/account/SignIn"));
// const SignUpView = lazy(() => import("./views/account/SignUp"));
const ForgotPasswordView = lazy(() => import("./views/account/ForgotPassword"));
const OrdersView = lazy(() => import("./views/account/Orders"));
const WishlistView = lazy(() => import("./views/account/Wishlist"));
const NotificationView = lazy(() => import("./views/account/Notification"));
const MyProfileView = lazy(() => import("./views/account/MyProfile"));
const ProductListView = lazy(() => import("./views/product/List"));
const ProductDetailView = lazy(() => import("./views/product/Detail.tsx"));
const StarZoneView = lazy(() => import("./views/product/StarZone"));
const CartView = lazy(() => import("./views/cart/Cart"));
const CheckoutView = lazy(() => import("./views/cart/Checkout"));
const InvoiceView = lazy(() => import("./views/cart/Invoice"));
const DocumentationView = lazy(() => import("./views/Documentation"));
const NotFoundView = lazy(() => import("./views/pages/404"));
const InternalServerErrorView = lazy(() => import("./views/pages/500"));
const ContactUsView = lazy(() => import("./views/pages/ContactUs"));
const SupportView = lazy(() => import("./views/pages/Support"));
const BlogView = lazy(() => import("./views/blog/Blog"));
const BlogDetailView = lazy(() => import("./views/blog/Detail"));


function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  },[dispatch]);
  return (
    // <BrowserRouter>
      <React.Fragment>
        <Header />
        {/* <TopMenu /> */}
        <div className="container-fluid section">
          <div className="row justify-content-center">
            <div className="col-lg-12 content-desktop">
              <Suspense
                fallback={
                  <div className="text-white text-center mt-3">Loading...</div>
                }
              >
                <Routes>
                  <Route exact path="/" element={<HomeView />} />
                  <Route exact path="/account/signin" element={<AuthModal />} />
                  <Route exact path="/account/signup" element={<AuthModal />} />
                  <Route
                    exact
                    path="/account/forgotpassword"
                    element={<ForgotPasswordView />}
                  />
                  <Route
                    exact
                    path="/account/notification"
                    element={<NotificationView />}
                  />
                 
                  <Route exact path="/category/:categoryId/subCategoy" element={<SubCategory />} />
                  <Route exact path="/subcategory/:subCategoryId/product" element={<ProductListView />} />
                  <Route exact path="/product/:productId/detail" element={<ProductDetailView />} />
                  <Route exact path="/star/zone" element={<StarZoneView />} />
                
                  {/* Protected Routes */}
                  <Route
                    exact
                    path="/account/profile"
                    element={
                      <ProtectedRoute>
                        <MyProfileView />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    exact
                    path="/account/orders"
                    element={
                      <ProtectedRoute>
                        <OrdersView />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    exact
                    path="/account/wishlist"
                    element={
                      <ProtectedRoute>
                        <WishlistView />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    exact
                    path="/account/cart"
                    element={
                      <ProtectedRoute>
                        <CartView />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    exact
                    path="/account/checkout"
                    element={
                      // <ProtectedRoute>
                        <CheckoutView />
                      // </ProtectedRoute>
                    }
                  />
                  <Route exact path="/invoice" element={<InvoiceView />} />
                  <Route exact path="/documentation" element={<DocumentationView />} />
                  <Route exact path="/contact-us" element={<ContactUsView />} />
                  <Route exact path="/support" element={<SupportView />} />
                  <Route exact path="/blog" element={<BlogView />} />
                  <Route exact path="/blog/detail" element={<BlogDetailView />} />
                  <Route exact path="/500" element={<InternalServerErrorView />} />
                  <Route path="*" element={<NotFoundView />} />
                </Routes>
              </Suspense>
            </div>
          </div>
        </div>
        <Footer />
      </React.Fragment>
    // </BrowserRouter>
  );
}

export default App;
