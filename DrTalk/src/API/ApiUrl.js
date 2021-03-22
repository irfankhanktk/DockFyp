export const ApiUrls = {
  //  baseUrl: 'https://tms.bepms.com', // local url
  baseUrl: 'http://192.168.0.111/TestApi/api/std/', // local url

  auth: {
    // refreshToken: '',
    getUserIfExist: 'GetUserIfExist',
    // getPermissions: '/api/Members/GetPermissions',
    // login: '/token', //LOCAL
  },
  doctor:{
    _getUnApprovedDoctors:'GetUnApprovedDoctor',
    _getApprovedDoctors:'GetApprovedDoctor', 
    _getRejectedDoctors:'GetRejectedDoctor',
    _rejectDoctor:'GetDoctorReject',
    _approveDoctor:'GetDoctorApprove',
    _addDoctor:'PostAddDoctor',
  },
patient:{
  _getAllPatient:'GetAllPatients',
  invitation:{
    _invitePatient:'GetPateintInvited',
    _addPatient:'PostAddPateint',
  }
},

}