import {IconName} from "@fortawesome/free-regular-svg-icons";
import {IconName as IconName2} from "@fortawesome/free-solid-svg-icons";

// import {IconName} from "@fortawesome/free-solid-svg-icons";

// export type CategoryName = "ALL" | "AMAZING_VIEWS" | "OMG" | "TREEHOUSES"
//   | "BEACH" | "FARMS" | "TINY_HOMES" | "LAKE" | "CONTAINERS" | "CAMPING" | "CASTLE" | "SKIING"
// | "CAMPERS" | "ARTIC" | "BOAT" | "BED_AND_BREAKFASTS" | "ROOMS" | "EARTH_HOMES" | "TOWER" | "CAVES"
// | "LUXES" | "CHEFS_KITCHEN"

export type CategoryName = "ALL" | "ROOMS" | "APARTMENTS" | "CONDOS" | "HOUSES" | "CABINS" | "TREEHOUSES"

export interface Category {
  icon: IconName | IconName2,
  displayName: string,
  technicalName: CategoryName,
  activated: boolean
}

