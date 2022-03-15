import {generateLicence, generateReleaseInfo, LicenseInfo} from '@mui/x-license-pro';
export default function license() {
    const oneDayInMS = 1000 * 60 * 60 * 24;
const oneYear = oneDayInMS * 365;
const RELEASE_INFO = generateReleaseInfo();
const validLicense = generateLicence({
    expiryDate: new Date(new Date().getTime() + oneYear),
    orderNumber: 'MUI-45675676',
  });
  LicenseInfo.setLicenseKey(validLicense);
  LicenseInfo.setReleaseInfo(RELEASE_INFO);
}