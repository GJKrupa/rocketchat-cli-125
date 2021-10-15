import {IHttp, IModify, IPersistence, IRead} from '@rocket.chat/apps-engine/definition/accessors';
import {ApiEndpoint, IApiEndpointInfo, IApiRequest, IApiResponse} from '@rocket.chat/apps-engine/definition/api';
import {BaseItem} from './BaseItem';
import {DerivedItem} from './DerivedItem';

export class JunkEndpoint extends ApiEndpoint {

    public path = 'jira';

    public async post(
        request: IApiRequest,
        endpoint: IApiEndpointInfo,
        read: IRead,
        modify: IModify,
        http: IHttp,
        persist: IPersistence): Promise<IApiResponse> {

        let x: BaseItem = new DerivedItem();

        return this.success({status: `OK`});
    }
}
