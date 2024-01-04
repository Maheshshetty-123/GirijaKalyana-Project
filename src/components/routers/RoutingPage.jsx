import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../../pages/home/homepage/HomePage";
import ServicePage from "../../pages/home/servicepage/ServicePage";
import AdminLogoutPage from "../../pages/admin/adminpage/AdminLogoutPage";
import ForgotPassword from "../../pages/home/forgotpasswordpage/ForgotPassword";
// import Adminpage from "../../pages/admin/adminpage/Adminpage";
import DashBoardPage from "../../pages/admin/dashboard/DashBoardPage";
import UserPage from "../../pages/admin/user_management/UserPage";
import UpgradeUserPage from "../../pages/admin/user_management/UpgradeUserPage";
import RenewalsPage from "../../pages/admin/user_management/RenewalsPage";
import ResetPasswordPage from "../../pages/admin/user_management/ResetPasswordPage";
import ImageVerificationPage from "../../pages/admin/user_management/ImageVerificationPage";
import PendingPage from "../../pages/admin/Assistence_service/PendingPage";
import SuccessPage from "../../pages/admin/Assistence_service/SuccessPage";
import PromotersUsersPage from "../../pages/admin/Assistence_service/PromotersUsersPage";
import PromotersPage from "../../pages/admin/promoter_management/PromotersPage";
import PromotersEarningsPage from "../../pages/admin/promoter_management/PromotersEarningsPage";
import PayToPromotersPage from "../../pages/admin/promoter_management/PayToPromotersPage";
import OnlineTransactionPage from "../../pages/admin/receipts/OnlineTransactionPage";
import AssistanceOnlineTransactionPage from "../../pages/admin/receipts/AssistanceOnlineTransactionPage";
import ReceiptVoucherPage from "../../pages/admin/receipts/ReceiptVoucherPage";
import UsersReportPage from "../../pages/admin/reports/UsersReportPage";
import RenewalsReportPage from "../../pages/admin/reports/RenewalsReportPage";
import NotificationPage from "../../pages/admin/notification/NotificationPage";
import AboutUsPage from "../../pages/home/aboutus/AboutUsPage";
import PrivacyPolicyPage from "../../pages/home/privacypolicy/PrivacyPolicyPage";
import ContactUsPage from "../../pages/home/contactus/ContactUsPage";

const RoutingPage = () => {
  return (
    <div>
      <Routes>
        {/* HOME page section */}
        <Route path="/">
          <Route index element={<HomePage />} />
          <Route path="servicepage" element={<ServicePage />} />
          <Route path="forgotpasswordpage" element={<ForgotPassword />} />
          <Route path="aboutus" element={<AboutUsPage/>} />
          <Route path="privacypolicy" element={<PrivacyPolicyPage/>} />
          <Route path="contact" element={<ContactUsPage/>} />

          {/* ADMIN page section */}
          <Route path="admin">
            {/* <Route  index element={<Adminpage/>} /> */}
            <Route path="logout" element={<AdminLogoutPage />} />
            <Route path="dashboard" element={<DashBoardPage />} />
            {/* user management pages navigation */}
            <Route path="user" element={<UserPage />} />
            <Route path="upgrade" element={<UpgradeUserPage />} />
            <Route path="renewals" element={<RenewalsPage />} />
            <Route path="resetpassword" element={<ResetPasswordPage />} />
            <Route
              path="imageverification"
              element={<ImageVerificationPage />}
            />
            {/* assistance pages  navigation */}
            <Route path="assistencepending" element={<PendingPage />} />
            <Route path="assistencesuccess" element={<SuccessPage />} />
            <Route
              path="assistencepromotersusers"
              element={<PromotersUsersPage />}
            />

            {/* promoters management pages navigation */}
            <Route path="promoters" element={<PromotersPage />} />
            <Route path="promotersusers" element={<PromotersUsersPage />} />
            <Route
              path="promotersearnings"
              element={<PromotersEarningsPage />}
            />
            <Route path="paytopromoters" element={<PayToPromotersPage />} />

            {/* receipts pages navigation */}
            <Route path="onlinetransaction" element={<OnlineTransactionPage/>} />
            <Route path="assistanceonlinetransaction" element={<AssistanceOnlineTransactionPage/>} />
            <Route path="receiptvoucher" element={<ReceiptVoucherPage/>} />
            
            {/* reports pages navigation */}
            <Route path="usersreports" element={<UsersReportPage/>} />
            <Route path="renewalsreports" element={<RenewalsReportPage/>} />
            <Route path="receiptsreports" element={<ReceiptVoucherPage/>} />
            

            {/* notification navigation */}
            <Route path="notification" element={<NotificationPage/>} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};

export default RoutingPage;
