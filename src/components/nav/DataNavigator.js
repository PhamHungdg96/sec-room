import React from 'react'
import * as HiIcons from 'react-icons/hi'
import * as FaIcons from 'react-icons/fa'

export const menus = [
    {id:'Dashboard',icon: <FaIcons.FaThLarge size={18}/>, path: '/'},
    {
      id: 'Learn',
      children: [
        { id: 'Courses', icon: <FaIcons.FaBuffer size={18}/>, path:'' },
        { id: 'Tests', icon:<FaIcons.FaShoePrints size={18}/>, path:'' },
        { id: 'Docs', icon:<HiIcons.HiDocumentDuplicate size={18}/>, path:'' },
      ],
    },
    {
        id: 'Community',
        children: [
            { id: 'Bảng xếp hạng', icon: <FaIcons.FaRegChartBar size={18}/>, path:''},
            { id: 'Forum', icon: <FaIcons.FaForumbee size={18}/>, path:'' },
            { id: 'Chat', icon: <FaIcons.FaComments size={18}/>, path:'' },
            { id: 'Contribute', icon: <FaIcons.FaSignLanguage size={18}/>, path:''}
        ],
    },
    {
        id: 'Cá nhân',
        children: [
          { id: 'Info', icon:<FaIcons.FaInfoCircle size={18}/>, path:'' },
          { id: 'Courses', icon:<FaIcons.FaCoins size={18}/>, path:'' },
          { id: 'Process', icon: <FaIcons.FaSeedling size={18}/>, path:'' },
        ],
    },
    {
        id: 'More',
        children: [
          { id: 'Develop', icon: <FaIcons.FaDeviantart size={18}/>, path:'' },
          { id: 'Access', icon: <FaIcons.FaUniversalAccess size={18}/>, path:'' },
        ],
    },
];