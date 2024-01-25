/**
 * Parameter Type
 */
function sampleFunction(x: number, y: string, z: boolean) {}

type Params = Parameters<typeof sampleFunction>;
type Param2 = Parameters<(one: number) => void>;
