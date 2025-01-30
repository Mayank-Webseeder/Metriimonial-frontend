import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
// import Sidebar from "./sidebar/Sidebar"; // Match exact casing
import UserManagement from "./components/UserManagement";
import SpecialistProfile from "./components/SpecialistProfile";
import LoginPage from "./components/LoginPage";
import AddSubAdmin from "./components/AddSubAdmin";
import Protectedroutes from "./components/Protectedroutes";
import Subadmin from "./components/Subadmin";
import Userprofileupdate from "./updatecomponents/Userprofileupdate";
import Panditprofileupdate from "./updatecomponents/Panditprofileupdate";
import Adduser from "./components/adduser/Adduser";
import User from "./components/Services/User";
import Kathavachak from "./components/Services/Kathavachak";
import PanditServices from "./components/Services/PanditServices";
import Jyotish from "./components/Services/Jyotish";
import UploadPhoto from "./components/Services/UploadPhoto";
import PersonalDetailsForm from "./components/PersonalDetailsForm";
import NewsEvents from "./components/NewsEvents";
import KathavachakProfile from "./components/KathavachakProfile";
import AstrologerProfile from "./components/AstrologerProfile";
import Feedback from "./components/Feedback";
import ActivistList from "./components/ActivistList";
import SavedProfiles from "./components/SavedProfiles";
import SavedPandit from "./components/SavedPandit";
import SavedDharmashala from "./components/SavedDharmashala";
import SavedCommitie from "./components/SavedCommitie";
import ProfilePage from "./components/profile/ProfilePage";
import ProfileHeader from "./components/profileheader/ProfileHeader";
// import AdminPanel from "./components/AdminPanel";
import CommitteeActivistPage from "./components/committeeactivist/CommitteeActivistPage";
import DharmshalaPage from "./components/dharmshala/DharmshalaPage";
import HomePage from "./components/Homepage";
import MatrimonialProfiles from "./components/pages/MatrimonialProfiles";
import SuccessStories from "./components/SuccessStories";
import PostSuccessStory from "./components/PostSuccessStory";
import Dashboard from "./components/Dashboard";
import DharamshalaForm from "./components/dharmshala/DharamshalaForm";
import UpdateProfile from "./components/updateprofiles/UpdateProfile";
import CommitteeForm from "./components/committeeactivist/CommitteeForm";
import SingleUser from "./components/SingleUser";
import SingleUserPKA from "./components/SingleUserPKA";
import ReportManagementPage from "./components/pages/ReportManagement";
import ActivistsProfile from "./components/pages/ActivistsProfile";
import ProfileApprovals from "./components/pages/ProfileApprovals";
import SubscriptionManagent from "./components/pages/SubscriptionManagent";
import Notifications from "./components/pages/Notifications";

const App = () => {
  return (
    <Routes>
      {/* Public Routes */}
      {/* Protected Routes */}
      <Route path="/login" element={<LoginPage />} />
      <Route element={<Protectedroutes />}>
        <Route path="/" index element={<Dashboard />} />
        <Route path="/notifications" index element={<Notifications />} />
        <Route path="/all-users" element={<UserManagement />} />
        <Route path="/matrimonial-profiles" element={<MatrimonialProfiles />} />
        <Route path="/user/:id" element={<SingleUser />} />
        <Route path="/personal-details" element={<PersonalDetailsForm />} />
        <Route path="/specialist/:userType" element={<SpecialistProfile />} />
        <Route path="/:userType/:id" element={<SingleUserPKA />} />
        <Route path="/activist-profiles" element={<ActivistsProfile />} />
        <Route path="/profile-approvals" element={<ProfileApprovals />} />
        <Route
          path="/manage-subscriptions"
          element={<SubscriptionManagent />}
        />
        <Route path="/profile-reports" element={<ReportManagementPage />} />
        <Route path="/community-members" element={<Subadmin />} />
        <Route path="/add-subadmin" element={<AddSubAdmin />} />
        <Route path="/update" element={<Userprofileupdate />} />
        <Route path="/update-pandit" element={<Panditprofileupdate />} />
        <Route path="/news&events" element={<NewsEvents />} />
        <Route path="/add-user" element={<Adduser />} />
        <Route path="/user-form" element={<User />} />
        <Route path="/user-form/pandit-services" element={<PanditServices />} />
        <Route path="/kathavachak-profile" element={<KathavachakProfile />} />
        <Route path="/astrologer-profile" element={<AstrologerProfile />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/activist-list" element={<ActivistList />} />
        <Route path="/saved-profiles" element={<SavedProfiles />} />
        <Route path="/saved-pandit" element={<SavedPandit />} />
        <Route path="/saved-dharmashala" element={<SavedDharmashala />} />
        <Route path="/saved-commitie" element={<SavedCommitie />} />
        <Route
          path="/user-form/kathavachak-services"
          element={<Kathavachak />}
        />
        <Route path="/kathavachak-profile" element={<KathavachakProfile />} />
        <Route path="/astrologer-profile" element={<AstrologerProfile />} />
        <Route path="/profile-page" element={<ProfilePage />} />
        <Route path="/profile-header" element={<ProfileHeader />} />
        <Route path="/committee-activist" element={<CommitteeActivistPage />} />
        <Route path="/dharm-shala" element={<DharmshalaPage />} />

        <Route
          path="/user-form/kathavachak-services"
          element={<Kathavachak />}
        />
        <Route path="/user-form/jyotish-services" element={<Jyotish />} />
        <Route path="/user-form/photo-upload" element={<UploadPhoto />} />
        <Route path="/home-page" element={<HomePage />} />
        <Route
          path="/home/matrimonialprofiles"
          element={<MatrimonialProfiles />}
        />
        <Route path="/success-story" element={<SuccessStories />} />
        <Route path="/success-story/post" element={<PostSuccessStory />} />
        <Route path="/dharma-shala/upload" element={<DharamshalaForm />} />
        <Route path="/committee-activist/upload" element={<CommitteeForm />} />

        <Route path="/profile-page/edit-profile" element={<UpdateProfile />} />
      </Route>

      {/* Default Route (can be used to redirect users who are not authenticated) */}
    </Routes>
  );
};

export default App;
