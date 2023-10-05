import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/page/home';
import SignIn from './components/auth/signIn';
import Dashboard from './components/dashboard/dashboard';
import SignUp from './components/auth/signUp';
import ForgotPassword from './components/auth/forgotPassword';
import ResetPassword from './components/auth/resetPassword';
import OTPInput from './components/auth/inputOTP';
import NotFound from './components/auth/notFound';
import EmergencyListForHospitals from './components/emergency/emergencyForHospitals';
import MedicalRecordDetail from './components/records/recordDetail';
import MedicalRecordList from './components/records/recordList';
import PaymentRecordList from './components/payments/paymentList';
import PaymentDetail from './components/payments/paymentDetail';

function App(): JSX.Element {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/verify" element={<OTPInput />} />
          <Route path="/emergencies" element={<EmergencyListForHospitals />}/>
          <Route path='records' element={<MedicalRecordList />}/>
          <Route path='record/:id' element={<MedicalRecordDetail record={null} />}/>
          <Route path='payments' element={<PaymentRecordList />}/>
          <Route path='payment/:id' element={<PaymentDetail record={null}/>}/>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
