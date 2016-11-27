export class Physiological {
    userID: number;
    userName: string;
    userAge: number;
    roomTemperature: number;

    /* customer-behavior : walkSteps */
    walkSteps: number;

     /* customer-physinfo:
        1. blood-oxygen
        2. body-temperature
        3. breath
        4. glycemia
        5. heartbeat
        6. sleep-status
        7. uric-acid
     */
     bloodOxygen: number;
     bodyTemperature: number;
     breath: number;
     glycemia: number;
     heartbeat: number;
     sleepStatus: number;
     uricAcid: number;

     /* device information on-power/ no-power*/
     wristband: number;
     mattress: number;

     /* indoor behavior:
     1. leave room.
     2. count of leave room.
     3. calling.
     4. count of calling. */

     leaveRoom: boolean;
     countLeaveRoom: number;
     calling: boolean;
     countCall: number;
}
