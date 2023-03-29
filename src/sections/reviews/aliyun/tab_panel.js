import { Typography } from '@mui/material';
import TabPanel from 'src/components/tab_panel';

function AliyunTabPanel(props) {
  const { index, tabIndex } = props;
  return (
    <TabPanel value={tabIndex} index={index}>
      <div>
        <Typography variant="h5">阿里雲配置</Typography>
      </div>
    </TabPanel>
  );
}

export default AliyunTabPanel;
