import axios from 'axios';
import { allFilesPath, downloadFilePath } from './pathConstants.js';
import { apiKey, apiBaseUrl } from '../../../config/default.js';

class FileRepository {
  constructor() {}

  // Get list of files name from external API
  async getListOfFiles() {
    const response = await axios.get(`${apiBaseUrl}${allFilesPath}`, {
      headers: { Authorization: apiKey },
    });
    return response.data.files;
  }

  // Downloads a file data from the external API.
  async downloadFile(fileName) {
    const response = await axios.get(`${apiBaseUrl}${downloadFilePath(fileName)}`, {
      headers: { Authorization: apiKey },
    });
    return response.data;
  }
}

export default FileRepository;
