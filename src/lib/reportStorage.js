// src/lib/reportStorage.js

const REPORTS_KEY = 'spk-saved-reports';
const CURRENT_KEY = 'spk-data';

/**
 * Generate unique ID for reports
 */
const generateId = () => `report_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

/**
 * Get all saved reports metadata
 * @returns {Array} Array of report metadata { id, name, createdAt, updatedAt }
 */
export const getAllReports = () => {
    try {
        const reports = localStorage.getItem(REPORTS_KEY);
        return reports ? JSON.parse(reports) : [];
    } catch (error) {
        console.error('Error getting reports:', error);
        return [];
    }
};

/**
 * Save current form data as a new report
 * @param {string} name - Report name
 * @param {object} data - Form data to save
 * @returns {object} Saved report metadata
 */
export const saveReport = (name, data) => {
    try {
        const reports = getAllReports();
        const id = generateId();
        const now = new Date().toISOString();

        const reportMeta = {
            id,
            name: name || `Laporan ${reports.length + 1}`,
            createdAt: now,
            updatedAt: now
        };

        // Save report data separately
        localStorage.setItem(`spk-report-${id}`, JSON.stringify(data));

        // Update reports list
        reports.push(reportMeta);
        localStorage.setItem(REPORTS_KEY, JSON.stringify(reports));

        return reportMeta;
    } catch (error) {
        console.error('Error saving report:', error);
        throw error;
    }
};

/**
 * Load a saved report by ID
 * @param {string} id - Report ID
 * @returns {object|null} Report data or null
 */
export const loadReport = (id) => {
    try {
        const data = localStorage.getItem(`spk-report-${id}`);
        return data ? JSON.parse(data) : null;
    } catch (error) {
        console.error('Error loading report:', error);
        return null;
    }
};

/**
 * Delete a saved report by ID
 * @param {string} id - Report ID
 * @returns {boolean} Success status
 */
export const deleteReport = (id) => {
    try {
        const reports = getAllReports();
        const filtered = reports.filter(r => r.id !== id);
        localStorage.setItem(REPORTS_KEY, JSON.stringify(filtered));
        localStorage.removeItem(`spk-report-${id}`);
        return true;
    } catch (error) {
        console.error('Error deleting report:', error);
        return false;
    }
};

/**
 * Update an existing report
 * @param {string} id - Report ID
 * @param {string} name - New name (optional)
 * @param {object} data - New data (optional)
 */
export const updateReport = (id, name, data) => {
    try {
        const reports = getAllReports();
        const index = reports.findIndex(r => r.id === id);

        if (index === -1) return false;

        if (name) reports[index].name = name;
        reports[index].updatedAt = new Date().toISOString();

        if (data) {
            localStorage.setItem(`spk-report-${id}`, JSON.stringify(data));
        }

        localStorage.setItem(REPORTS_KEY, JSON.stringify(reports));
        return true;
    } catch (error) {
        console.error('Error updating report:', error);
        return false;
    }
};

/**
 * Export a report as JSON file download
 * @param {string} id - Report ID
 */
export const exportReport = (id) => {
    try {
        const reports = getAllReports();
        const meta = reports.find(r => r.id === id);
        const data = loadReport(id);

        if (!meta || !data) return false;

        const exportData = {
            meta,
            data,
            exportedAt: new Date().toISOString(),
            version: '1.0'
        };

        const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${meta.name.replace(/[^a-z0-9]/gi, '_')}_${Date.now()}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);

        return true;
    } catch (error) {
        console.error('Error exporting report:', error);
        return false;
    }
};

/**
 * Import a report from JSON file
 * @param {File} file - JSON file to import
 * @returns {Promise<object>} Imported report metadata
 */
export const importReport = (file) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();

        reader.onload = (e) => {
            try {
                const importData = JSON.parse(e.target.result);

                if (!importData.data || !importData.version) {
                    throw new Error('Invalid report file format');
                }

                const name = importData.meta?.name || 'Imported Report';
                const saved = saveReport(`${name} (Imported)`, importData.data);
                resolve(saved);
            } catch (error) {
                reject(error);
            }
        };

        reader.onerror = () => reject(new Error('Failed to read file'));
        reader.readAsText(file);
    });
};

/**
 * Export current working data (for backup)
 */
export const exportCurrent = () => {
    try {
        const data = localStorage.getItem(CURRENT_KEY);
        if (!data) return false;

        const blob = new Blob([data], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `SPK_Current_${Date.now()}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);

        return true;
    } catch (error) {
        console.error('Error exporting current:', error);
        return false;
    }
};
