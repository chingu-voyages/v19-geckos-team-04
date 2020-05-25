import React from 'react';
import styled from 'styled-components';
import Menu from './../Shared/UI/Menu';
import DashboardView from './DashboardView';

function Dashboard( { userData } ) {
  return (
    <>
        <Menu userData={ userData }/>
        <DashboardView />
    </>
  )
}

export default Dashboard;

