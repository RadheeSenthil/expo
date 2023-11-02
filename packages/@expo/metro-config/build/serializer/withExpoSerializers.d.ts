import { Module, MixedOutput, ReadOnlyGraph, SerializerOptions } from 'metro';
import { InputConfigT, SerializerConfigT } from 'metro-config';
import { SerialAsset } from './serializerAssets';
export type Serializer = NonNullable<SerializerConfigT['customSerializer']>;
export type SerializerParameters = Parameters<Serializer>;
export type SerializerPlugin = (...props: SerializerParameters) => SerializerParameters | Promise<SerializerParameters>;
export declare function withExpoSerializers(config: InputConfigT): InputConfigT;
export declare function withSerializerPlugins(config: InputConfigT, processors: SerializerPlugin[]): InputConfigT;
export declare function treeShakeSerializerPlugin(entryPoint: string, preModules: readonly Module<MixedOutput>[], graph: ReadOnlyGraph, options: SerializerOptions): Promise<SerializerParameters>;
export declare function getDefaultSerializer(fallbackSerializer?: Serializer | null): Serializer;
export declare function createSerializerFromSerialProcessors(processors: (SerializerPlugin | undefined)[], originalSerializer?: Serializer | null): Serializer;
export { SerialAsset };
