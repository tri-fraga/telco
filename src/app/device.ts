export class Device {
	/*hostName: string;
	demainName: string;
	deviceNumber: number;
	adminState: string;
	ipVersionActivated: string;
	ipVersionSupported: string;
	snmpVersion: string;
	routerCode: number;
	qos:bool;
	comment:string;*/

	position: number;
	name: string;
	weight: number;
	symbol: string

	public constructor(fields?: {
			position?: number,
			name?: string,
			weight?: number,
			symbol?: string
	}) {
		if (fields) Object.assign(this, fields);
	}

}
