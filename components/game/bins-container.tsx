import { Image, TouchableOpacity, View } from "react-native";

import { Bin } from "@/data/bins";

interface Props {
  bins: Bin[];
  onBinPress: (binId: string) => void;
}

export function BinsContainer({ bins, onBinPress }: Props) {
  return (
    <View className="flex-row justify-around px-5">
      {bins.map((bin) => (
        <TouchableOpacity
          key={bin.id}
          className="w-20 h-20 bg-[rgba(255,255,255,0.2)] rounded-xl p-2"
          onPress={() => onBinPress(bin.id)}
        >
          <Image source={bin.image} className="w-full h-full object-contain" />
        </TouchableOpacity>
      ))}
    </View>
  );
}
