import TabPanel from 'src/components/tab_panel';

function SummaryTabPanel(props) {
  const { index, tabIndex } = props;
  return (
    <TabPanel value={tabIndex} index={index}>
      (( 施工中 ))
    </TabPanel>
  );
}

export default SummaryTabPanel;
