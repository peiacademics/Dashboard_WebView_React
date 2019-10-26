const Menu = [
  {
    path: '/dashboard',
    icon: 'fa fa-th',
    title: 'Dashboard'
  },
  {
    path: '/knowledgeDomains',
    icon: 'fa fa-hdd',
    title: 'Knowledge Domains'
    // children: [
    //   { path: '/knowledgeDomains/jee', title: 'JEE' },
    //   { path: '/knowledgeDomains/advanced', title: 'Advanced' },
    //   { path: '/knowledgeDomains/neet', title: 'NEET' }
    // ]
  },
  {
    path: '/courses',
    icon: 'fab fa-simplybuilt',
    title: 'Courses'
  },
  {
    path: '/ui',
    icon: 'fa fa-gem',
    title: 'Admin Activity'
  },
  {
    path: '/bootstrap-4',
    icon: 'fa fa-gem',
    title: 'Students'
  },
  {
    path: '/form',
    icon: 'fa fa-list-ol',
    title: 'Orders'
  },
  {
    icon: 'fa fa-user',
    title: 'User',
    children: [
      { path: '/usercreation', title: 'User Creation' },
      { path: '/pestudentcreation', title: 'PE Students' },
      { path: '/parentscreation', title: 'PE Parents' },
      { path: '/clientscreation', title: 'Clients' },
      { path: '/peexpertcreation', title: 'PE Expert' },
    ]
  },
  {
    icon: 'fa fa-user',
    title: 'Edit/Delete Users',
    children: [
      { path: '/manageusers', title: 'User' },
      { path: '/managestudents', title: 'PE Students' },
      { path: '/manageparents', title: 'PE Parents' },
      { path: '/manageclients', title: 'Clients' },
      { path: '/manageexperts', title: 'PE Expert' },
    ]
  },
  {
    path: '/table',
    icon: 'fa fa-table',
    title: 'Logout'
  }
];

export default Menu;
