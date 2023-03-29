import * as React from 'react';
import Head from 'next/head';
import { Box, Container, Stack, Tabs, Tab, Typography } from '@mui/material';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';

import TabPanel from 'src/components/tab_panel';
import AliyunTabPanel from 'src/sections/reviews/aliyun/tab_panel';
import SummaryTabPanel from 'src/sections/reviews/summary/tab_panel';

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const Page = () => {
  const [tabIndex, setTabIndex] = React.useState(0);

  const handleTabChange = (event, index) => {
    setTabIndex(index);
  };

  return (
    <>
      <Head>
        <title>內容審核</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth="lg">
          <Stack spacing={3}>
            <div>
              <Typography variant="h4">內容審核</Typography>
            </div>
          </Stack>
        </Container>
        <Container>
          <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs value={tabIndex} onChange={handleTabChange} aria-label="basic tabs example">
                <Tab label="Summary" {...a11yProps(0)} />
                <Tab label="阿里雲" {...a11yProps(1)} />
                <Tab label="圖譜" {...a11yProps(2)} disabled />
              </Tabs>
            </Box>
            <SummaryTabPanel index={0} tabIndex={tabIndex} />
            <AliyunTabPanel index={1} tabIndex={tabIndex} />
          </Box>
        </Container>
      </Box>
    </>
  );
};

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
