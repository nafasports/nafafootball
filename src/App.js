import logo from "./logo.svg";
import "./App.css";
import BasicExample from "./components/navbar/NavBar";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Modal from "./components/modal/Modal";
import LoginScreen from "./screens/LoginScreen";
import SignUp from "./screens/SignUp";
import AdminCreatePost from "./screens/AdminScreens/AdminCreatePost";
import AdminList from "./screens/AdminScreens/AdminList";
import VideoUpload from "./screens/videos/VideoUpload";
import PersistentDrawerLeft from "./screens/AdminScreens/AdminDashboard";
// import PersistentDrawerLeft from "./screens/AdminScreens/AdminTournament/AdminTourna";
import AdminCreateNewsCat from "./screens/AdminScreens/newsBlog/AdminCreateNewsCat";
import CreateRoles from "./screens/AdminScreens/AdminRoles/CreateRoles";
import UserLIstScreen from "./screens/AdminScreens/AdminRoles/UserListScreen";
import AssignRoles from "./screens/AdminScreens/AdminRoles/AssignRoles";
import AssignAdmin from "./screens/AdminScreens/AdminRoles/AssignAdmin";
import AdminImageGallery from "./screens/AdminScreens/AdminImageGallery/AdminImageGallery";
import NewsDetails from "./screens/NewsDetails";
import GameSchedule from "./pages/Schedule/GameSchedule";
import Teams from "./pages/Teams/Teams";
import AdminCreateTeams from "./screens/AdminScreens/AdminTeams/AdminCreateTeams";
import AdminGetTeams from "./screens/AdminScreens/AdminTeams/AdminGetTeams";
import AdminTournament from "./screens/AdminScreens/AdminTournament/GetAdminTournament";
import AdminCreateLeague from "./screens/AdminScreens/AdminLeague/AdminCreateLeague";
import AdminGetLeagues from "./screens/AdminScreens/AdminLeague/AdminGetLeagues";
import AdminGetPost from "./screens/AdminScreens/newsBlog/AdminGetPost";
import CheckOutSteps from "./pages/CheckOutSteps/CheckOutSteps";
import TheGame from "./pages/CheckOutSteps/TheGame";
import Positions from "./pages/CheckOutSteps/Positions";
import Kicks from "./pages/CheckOutSteps/Kicks";
import Fields from "./pages/CheckOutSteps/Fields";
import { News } from "./pages/News/News";
import AdminLogin from "./screens/AdminLogin";
// import AdminTourna from "./screens/AdminScreens/AdminTournament/AdminTourna";
import AdminPostMatch from "./screens/AdminScreens/AdminMatch/AdminPostMatc";
import CheckOutGame from "./screens/AdminScreens/AdminMatch/CheckOutGame";
import AdminGetMatch from "./screens/AdminScreens/AdminMatch/AdminGetMatch";

import LiveGame from "./components/LiveGame/LiveGame";
import LivesGames from "./LiveGames/LivesGames";
import AdminUpdateMatch from "./screens/AdminScreens/AdminMatch/AdminUpdateMatch";
import ErrorNotAdmin from "./screens/ErrorNotAdmin";
import AdminPostPlayers from "./screens/AdminScreens/AdminPlayer/AdminPostPlayers";
import AdminGetPlayers from "./screens/AdminScreens/AdminPlayer/AdminGetPlayers";
import Players from "./components/Players/Players";
import PlayersDetails from "./components/Players/PlayersDetails";
import Commentary from "./screens/AdminScreens/AdminMatch/Commentary";
import UpdateCommentary from "./screens/AdminScreens/AdminMatch/UpdateCommentary";
import AdminProfile from "./screens/AdminScreens/AdminProfile";
import AdminLayout from "./screens/AdminScreens/AdminLayout";
import AdminPlayerDetails from "./screens/AdminScreens/AdminPlayer/AdminGetPlayerDetails";
import AdminCreateCoach from "./screens/AdminScreens/AdminCoaches/AdminCreateCoach";
import AdminGetCoaches from "./screens/AdminScreens/AdminCoaches/AdminGetCoaches";
import AdminCoachDetails from "./screens/AdminScreens/AdminCoaches/AdminCoachDetails";
import AdminCreateOfficials from "./screens/AdminScreens/AdminOfficials/AdminCreateOfficials";
import AdminGetOfficials from "./screens/AdminScreens/AdminOfficials/AdminGetOfficials";
import AdminGetOfficialDetails from "./screens/AdminScreens/AdminOfficials/AdminGetOfficialDetails";
import PlayersHomePage from "./components/Players/PlayersHomePage";
import TeamPlayers from "./components/Players/TeamPlayers";
import DraftPlayerScreen from "./screens/AdminScreens/AdminPlayer/DraftPlayerScreen";
import DraftPlayer from "./screens/AdminScreens/AdminPlayer/DraftPlayer";
import TeamPlayerDetails from "./components/Players/TeamPlayerDetails";
import AdminPlayersDetails from "./screens/AdminScreens/AdminPlayer/AdminPlayersDetails";
import Nssffl from "./LiveGames/Nssffl/Nssffl";
import Academica from "./LiveGames/Academica/Academica";
import NigeriaPremiership from "./LiveGames/NaijaPremiership/NigeriaPremiership";
import AdminCreateTounaTeams from "./screens/AdminScreens/AdminTournaTeams/AdminCreateTounaTeams";

import GetTeams from "./screens/AdminScreens/AdminTournaTeams/GetTeams";

import TournamentTeams from "./pages/TournamentTeams/TournamentTeams";
import GetTounamentTeams from "./pages/TournamentTeams/GetTounamentTeams";
import BackgroundCover from "./components/modal/BackgroundCover";
import ApplyPlayer from "./components/Players/ApplyPlayer";
import GetAdminTournament from "./screens/AdminScreens/AdminTournament/GetAdminTournament";
import TeamPlayersApp from "./PlayersApplication/TeamPlayersApp";
import AdminGetActivate from "./screens/AdminScreens/AdminPlayer/AdminGetActivate";
import PlayersActivate from "./screens/AdminScreens/AdminPlayer/PlayersActivate";
import TeamApplication from "./TeamApplication/TeamApplication";
import AdminCreateTourna from "./screens/AdminScreens/AdminTournament/AdminCreateTourna";
import AdminStandingPost from "./screens/AdminScreens/AdminStanding/AdminStandingPost";
import AdminGetStanding from "./screens/AdminScreens/AdminStanding/AdminGetStanding";
import MatchInfoLayout from "./LiveGames/MatchInfos/MatchInfoLayout";
import MatchInfo from "./LiveGames/MatchInfos/MatchInfo";
import MatchCommentary from "./LiveGames/Commentary/MatchCommentary";
import AdminUpdateGameInfo from "./screens/AdminScreens/AdminMatch/AdminUpdateGameInfo";
import GameStatUpdate from "./screens/AdminScreens/AdminMatch/GameStatUpdate";
import TopNav from "./components/topNav/TopNav";
import ContactUs from "./pages/ContactUs/ContactUs";
import "./App.css";
import SubGameAdminLayout from "./screens/SubAdminRoles/GameAdmin/SubGameAdminLayout";
import UserLIstRoles from "./screens/AdminScreens/AdminRoles/UserListRoles";
import GetRoles from "./screens/AdminScreens/AdminRoles/GetRoles";
import BlogAdminLayout from "./screens/SubAdminRoles/BlogAmin/BlogAdminLayout";
import About from "./components/AboutUs/About";
import CreateLeagueDivision from "./screens/AdminScreens/AdminDivision/CreateLeagueDivision";
import AdminGetDivision from "./screens/AdminScreens/AdminDivision/AdminGetDivision";
import PlayerPdfForm from "./PlayersApplication/PlayerPdfForm/PlayerPdfForm";
import CoachLayout from "./screens/CoachScreen/CoachLayout";
import AdminCreateGroups from "./screens/AdminScreens/AdminGroups/AdminCreateGroups";
import AdminDistrict from "./screens/AdminScreens/AdminDistrict/AdminDistrict";
import CoachRegistration from "./Coaches/RegisterCoach/CoachRegistration";
function App() {
  const Admin = localStorage.getItem("isAdmin") === "true";
  const userId = localStorage.getItem("userId");
  return (
    <div style={{ background: "rgb(255, 255, 255)" }}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginScreen />} />
        {/* /////Admin Protected routes */}
        {Admin ? (
          <Route path="/admin/true" element={<AdminProfile />} />
        ) : (
          <Route path="/" element={<HomePage />} />
        )}
        {Admin ? (
          <Route path="/AdminProfile" element={<AdminProfile />} />
        ) : (
          <Route path="/" element={<HomePage />} />
        )}
        {Admin ? (
          <Route path="/admin/:id" element={<AdminProfile />} />
        ) : (
          <Route path="/" element={<HomePage />} />
        )}
        {/* ///// */}
        <Route path="/Adminlogin" element={<AdminLogin />} />
        <Route path="/error/notAnAdmin" element={<ErrorNotAdmin />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/signup" element={<SignUp />} />

        <Route path="/createCoach" element={<AdminCreateCoach />} />
        <Route path="/createOfficials" element={<AdminCreateOfficials />} />
        <Route path="/getOfficials" element={<AdminGetOfficials />} />
        <Route path="/getCoaches" element={<AdminGetCoaches />} />
        <Route path="/createGroups" element={<AdminCreateGroups />} />
        <Route path="/createDistrict" element={<AdminDistrict />} />
        {/* <Route
          path="/admin/:id"
          element={Admin ? <AdminLayout /> : <HomePage />}
        /> */}
        {/* <Route
          path="/admin/:id"
          element={Admin ? <PersistentDrawerLeft /> : <HomePage />}
        /> */}
        <Route path="/playerProfile/:id" element={<PlayersDetails />} />
        <Route path="/teamplayerProfile/:id" element={<TeamPlayerDetails />} />
        <Route
          path="/AdminplayerProfile/:id"
          element={<AdminPlayerDetails />}
        />
        <Route
          path="/createTounamentTeams"
          element={<AdminCreateTounaTeams />}
        />
        <Route path="/getTounamentTeams" element={<GetTeams />} />
        <Route
          path="/AdminPlayerProfile/:id"
          element={<AdminPlayersDetails />}
        />
        <Route path="/playerDrafting/:id" element={<DraftPlayer />} />
        <Route
          path="/AdminofficialProfile/:id"
          element={<AdminGetOfficialDetails />}
        />
        <Route path="/AdmincoachProfile/:id" element={<AdminCoachDetails />} />
        <Route path="/createPost" element={<AdminCreatePost />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/getPlayers" element={<AdminGetPlayers />} />
        <Route path="/Players" element={<PlayersHomePage />} />
        <Route path="/TeamPlayers" element={<TeamPlayers />} />
        <Route path="/PollPlayers" element={<Players />} />
        <Route path="/leagues" element={<GameSchedule />} />
        <Route path="/newspost" element={<AdminGetPost />} />
        <Route path="/news" element={<News />} />
        <Route path="/createPlayer" element={<AdminPostPlayers />} />
        <Route
          path="/nafaRules"
          element={<TheGame step1 step2 step3 step4 step5 />}
        />
        <Route path="/theGame" element={<TheGame />} />
        <Route path="/getAdminProfile" element={<GetRoles />} />
        <Route path="/positions" element={<Positions />} />
        <Route path="/kicks" element={<Kicks />} />
        <Route path="/postGame" element={<CheckOutGame />} />
        <Route path="/field" element={<Fields />} />
        <Route path="/createTeam" element={<AdminCreateTeams />} />
        <Route path="/createLeague" element={<AdminCreateLeague />} />
        <Route path="/getLeague" element={<AdminGetLeagues />} />
        <Route path="/getGameFixtures" element={<AdminGetMatch />} />
        {/* <Route path="/getTournament" element={<AdminTournament />} /> */}
        <Route path="/getTournament" element={<GetAdminTournament />} />

        <Route path="/updatePost" element={<VideoUpload />} />
        <Route path="/newscatcreate" element={<AdminCreateNewsCat />} />
        <Route path="/createRole" element={<CreateRoles />} />
        <Route path="/getTeam" element={<AdminGetTeams />} />
        <Route path="/userRole" element={<UserLIstRoles />} />
        <Route path="/getUsers" element={<UserLIstScreen />} />
        <Route path="/admin/user/:id/edit" element={<AssignRoles />} />
        <Route
          path="/admin/fixtures/commentary/:id/edit"
          element={<UpdateCommentary />}
        />
        <Route
          path="/admin/fixtures/gameInfo/:id/edit"
          element={<AdminUpdateGameInfo />}
        />
        <Route
          path="/admin/fixtures/Stats/:id/edit"
          element={<GameStatUpdate />}
        />
        <Route
          path="/gamesAdmin"
          element={
            localStorage.getItem("roles") === "GAMES ADMIN" ? (
              <SubGameAdminLayout />
            ) : (
              <HomePage />
            )
          }
        />
        <Route
          path="/blogAdmin"
          element={
            localStorage.getItem("roles") === "NewsCaster" ? (
              <BlogAdminLayout />
            ) : (
              <HomePage />
            )
          }
        />
        <Route path="/newsDetails/:id" element={<NewsDetails />} />
        <Route path="/admin/user/:id/adminedit" element={<AssignAdmin />} />
        <Route path="/admin/fixtures/:id/edit" element={<AdminUpdateMatch />} />
        <Route path="/AdminImageGallery" element={<AdminImageGallery />} />
        <Route path="/livegames" element={<LivesGames />} />
        <Route path="/Nssffltournament" element={<Nssffl />} />
        <Route path="/Academicatournament" element={<Academica />} />
        <Route path="/tournamentTeams" element={<TournamentTeams />} />
        <Route
          path="/viewTournamentTeams/:id"
          element={<GetTounamentTeams />}
        />
        <Route path="/poolPlayerApplication" element={<ApplyPlayer />} />
        <Route path="/activatePlayer" element={<AdminGetActivate />} />
        <Route
          path="/NigeriaPremiershiptournament"
          element={<NigeriaPremiership />}
        />
        <Route path="/draftPlayer" element={<DraftPlayerScreen />} />

        <Route path="/postStanding" element={<AdminStandingPost />} />
        <Route
          path="/admin/ActivateUser/:id/edit"
          element={<PlayersActivate />}
        />
        <Route path="/createTournament" element={<AdminCreateTourna />} />
        <Route path="/getStandings" element={<AdminGetStanding />} />
        <Route
          path="/TeamRegister"
          element={userId ? <TeamApplication /> : <LoginScreen />}
        />
        <Route path="/gameInfo/:id" element={<MatchInfo />} />
        <Route path="/matchdayCommentary/:id" element={<MatchCommentary />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/createDivision" element={<CreateLeagueDivision />} />
        <Route path="/getDivision" element={<AdminGetDivision />} />
        <Route path="/playersRegForm" element={<PlayerPdfForm />} />

        {localStorage.getItem("CoachId") ? (
          <Route path="/coachDashboard" element={<CoachLayout />} />
        ) : localStorage.getItem("isAdmin") === "true" ? (
          <Route path="/coachDashboard" element={<CoachLayout />} />
        ) : null}
        <Route path="/coachReg" element={<CoachRegistration />} />
        <Route path="/TeamPlayerReg" element={<TeamPlayersApp />} />
      </Routes>
    </div>
  );
}

export default App;
