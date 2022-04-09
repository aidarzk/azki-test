import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

import farsi from "src/dictionary/farsi";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const InformationModal = (props) => {
  const { open, onClose, form } = props;

  const {
    carType,
    carModel,
    insuranceCompany,
    thirdPersonPercentage,
    incidentPercentage,
  } = form;

  return (
    <div>
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {farsi.infoSummary}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {farsi.carType}: {carType?.title}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {farsi.carModel}: {carModel?.title}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {farsi.lastInsuranceCompany}: {insuranceCompany?.title}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {farsi.thirdPersonPercentage}: {thirdPersonPercentage?.title}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {farsi.incidentPercentage}: {incidentPercentage?.title}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default InformationModal;
