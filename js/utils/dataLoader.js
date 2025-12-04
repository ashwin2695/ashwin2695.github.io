// Data Loader - Handles loading JSON data files
export class DataLoader {
    constructor() {
        this.basePath = 'data/';
        this.sharedData = null;
    }

    async loadJSON(filename) {
        try {
            const response = await fetch(`${this.basePath}${filename}`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return await response.json();
        } catch (error) {
            console.error(`Error loading ${filename}:`, error);
            throw error;
        }
    }

    async loadSharedData() {
        if (!this.sharedData) {
            this.sharedData = await this.loadJSON('shared.json');
        }
        return this.sharedData;
    }

    async loadRoleData(role) {
        const filename = `${role}.json`;
        return await this.loadJSON(filename);
    }

    getSharedData() {
        return this.sharedData;
    }
}
