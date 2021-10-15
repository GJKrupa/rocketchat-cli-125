import {IAppAccessors, IConfigurationExtend, ILogger,} from '@rocket.chat/apps-engine/definition/accessors';
import {ApiSecurity, ApiVisibility} from '@rocket.chat/apps-engine/definition/api';
import {App} from '@rocket.chat/apps-engine/definition/App';
import {IAppInfo} from '@rocket.chat/apps-engine/definition/metadata';
import {JunkEndpoint} from './src/JunkEndpoint';

export class JunkApp extends App {
    constructor(info: IAppInfo, logger: ILogger, accessors: IAppAccessors) {
        super(info, logger, accessors);
    }

    public async initialize(configuration: IConfigurationExtend): Promise<void> {
        await configuration.api.provideApi({
            visibility: ApiVisibility.PUBLIC,
            security: ApiSecurity.UNSECURE,
            endpoints: [
                new JunkEndpoint(this),
            ],
        });
    }
}
