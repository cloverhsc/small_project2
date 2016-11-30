export class PatientInfo {
    /* result and message */
    result: string;
    message: string;

    /* 病人資料 */
    id: number;
    name: string;
    age: number;
    room_temperature: number;
    number: string;     // 病床號
    sex: string;        // M => 男， F => 女
    contact: string;    // 聯絡電話
    address: string;     // 地址
    height: string;     // 身高
    room: string;       // 病房名稱
}

export class Physiological {
    /* customer-behavior */
    walk_steps: number;     // 運動步數

    blood_pressure: number;
     /* customer-physinfo */
     uric_acid: string;
     body_temperature: string;
     blood_oxygen: string;
     breath: number;
     glycemia: string;
     heartbeat: number;
     attend_doctor: string;

     /* device information on-power or no-power*/
     wristband_power: boolean;
     mattress_power: boolean;

     /* indoor behavior */

     leave: boolean;
     count_leave: number;
     call: boolean;
     count_call: number;
}
