// State Manager - Centralized state management
export class StateManager {
    constructor() {
        this.state = {
            shared: null,
            roles: {
                salesforce: null,
                datascience: null,
                fullstack: null
            }
        };
    }

    setSharedData(data) {
        this.state.shared = data;
    }

    getSharedData() {
        return this.state.shared;
    }

    setRoleData(role, data) {
        if (this.state.roles.hasOwnProperty(role)) {
            this.state.roles[role] = data;
        }
    }

    getRoleData(role) {
        return this.state.roles[role];
    }

    hasRoleData(role) {
        return this.state.roles[role] !== null;
    }

    getAllState() {
        return this.state;
    }
}
