import newSchemas from '../../../schemas/new/index.js';
import translators from '../../../utils/translation/index.js';

// Configuration for new data types (used for processing and new routes)
const newInfoDataTypes = {
	colors: {
		route: `colors`,
		schema: newSchemas.colorSchema,
		translator: translators.translateColor,
		table: 'colors',
		idField: 'color_id',
		requiresWorld: false,
		oldType: 'colors',
	},
	factions: {
		route: `factions`,
		schema: newSchemas.factionSchema,
		translator: translators.translateFaction,
		table: 'factions',
		idField: 'faction_id',
		requiresWorld: false,
		oldType: 'factions',
	},
	'creature-types': {
		route: `creature-types`,
		schema: newSchemas.creatureTypeSchema,
		translator: translators.translateCreatureType,
		table: 'creature_types',
		idField: 'creature_type_id',
		requiresWorld: false,
		oldType: 'creature-types',
	},
	'activity-types': {
		route: `activity-types`,
		schema: newSchemas.activityTypeSchema,
		translator: translators.translateActivityType,
		table: 'activity_types',
		idField: 'activity_type_id',
		requiresWorld: false,
		oldType: 'activity-types',
	},
	islands: {
		route: `islands`,
		schema: newSchemas.islandSchema,
		translator: translators.translateIsland,
		table: 'islands',
		idField: 'island_id',
		requiresWorld: false,
		oldType: 'islands',
	},
	areas: {
		route: `areas`,
		schema: newSchemas.areaSchema,
		translator: translators.translateArea,
		table: 'areas',
		idField: 'area_id',
		requiresWorld: false,
		oldType: 'locations',
	},
	plots: {
		route: `plots`,
		schema: newSchemas.plotSchema,
		translator: translators.translatePlot,
		table: 'plots',
		idField: 'plot_id',
		requiresWorld: false,
		oldType: 'plots',
	},
	patches: {
		route: `patches`,
		schema: newSchemas.patchSchema,
		translator: translators.translatePatch,
		table: 'patches',
		idField: 'patch_id',
		requiresWorld: false,
		oldType: 'patches',
	},
	'resource-categories': {
		route: `resource-categories`,
		schema: newSchemas.resourceCategorySchema,
		translator: translators.translateResourceCategory,
		table: 'resource_categories',
		idField: 'resource_category_id',
		requiresWorld: false,
		oldType: 'resource-categories',
	},
	'resource-varieties': {
		route: `resource-varieties`,
		schema: newSchemas.resourceVarietySchema,
		translator: translators.translateResourceVariety,
		table: 'resource_varieties',
		idField: 'resource_variety_id',
		requiresWorld: false,
		oldType: 'resource-types',
	},
	'resource-types': {
		route: `resource-types`,
		schema: newSchemas.resourceTypeSchema,
		translator: translators.translateResourceType,
		table: 'resource_types',
		idField: 'resource_type_id',
		requiresWorld: false,
		oldType: 'resource-types',
	},
	'item-categories': {
		route: `item-categories`,
		schema: newSchemas.itemCategorySchema,
		translator: translators.translateItemCategory,
		table: 'item_categories',
		idField: 'item_category_id',
		requiresWorld: false,
		oldType: 'item-categories',
	},
	'item-varieties': {
		route: `item-varieties`,
		schema: newSchemas.itemVarietySchema,
		translator: translators.translateItemVariety,
		table: 'item_varieties',
		idField: 'item_variety_id',
		requiresWorld: false,
		oldType: 'item-varieties',
	},
	'item-types': {
		route: `item-types`,
		schema: newSchemas.itemTypeSchema,
		translator: translators.translateItemType,
		table: 'item_types',
		idField: 'item_type_id',
		requiresWorld: false,
		oldType: 'item-types',
	},
};

const newTimeDataTypes = {
	days: {
		route: `days`,
		schema: newSchemas.daySchema,
		translator: translators.translateDay,
		table: 'days',
		idField: 'day_id',
		requiresWorld: false,
		oldType: 'days',
	},
	'time-of-days': {
		route: `time-of-days`,
		schema: newSchemas.timeOfDaySchema,
		translator: translators.translateTimeOfDay,
		table: 'time_of_days',
		idField: 'time_of_day_id',
		requiresWorld: false,
		oldType: 'time-of-days',
	},
	seasons: {
		route: `seasons`,
		schema: newSchemas.seasonSchema,
		translator: translators.translateSeason,
		table: 'seasons',
		idField: 'season_id',
		requiresWorld: false,
		oldType: 'seasons',
	},
	'game-times': {
		route: `game-times`,
		schema: newSchemas.gameTimeSchema,
		translator: translators.translateGameTime,
		table: 'game_times',
		idField: 'game_time_id',
		requiresWorld: false,
		oldType: 'game-times',
	},
	// Add other new data types here...
};

const newEntityDataTypes = {
	worlds: {
		route: `worlds`,
		schema: newSchemas.worldSchema,
		translator: translators.translateWorld,
		table: 'worlds',
		idField: 'world_id',
		requiresWorld: false,
		oldType: 'worlds',
	},
	players: {
		route: `players`,
		schema: newSchemas.playerSchema,
		translator: translators.translatePlayer,
		table: 'players',
		idField: 'player_id',
		requiresWorld: false,
		oldType: 'players',
	},
	creatures: {
		route: `creatures`,
		schema: newSchemas.creatureSchema,
		translator: translators.translateCreature,
		table: 'creatures',
		idField: 'creature_id',
		requiresWorld: false,
		oldType: 'creatures',
	},
	resources: {
		route: `resources`,
		schema: newSchemas.resourceSchema,
		translator: translators.translateResource,
		table: 'resources',
		idField: 'resource_id',
		requiresWorld: true,
		oldType: 'items',
	},
	items: {
		route: `items`,
		schema: newSchemas.itemSchema,
		translator: translators.translateItem,
		table: 'items',
		idField: 'item_id',
		requiresWorld: true,
		oldType: 'items',
	},
	inventories: {
		route: `inventories`,
		schema: newSchemas.inventorySchema,
		translator: translators.translateInventory,
		table: 'inventories',
		idField: 'inventory_id',
		requiresWorld: false,
		oldType: 'inventories',
	},
	'data-tables': {
		route: `data-tables`,
		schema: newSchemas.dataTableSchema,
		translator: translators.translateDataTable,
		table: 'data_tables',
		idField: 'data_table_id',
		requiresWorld: true,
		oldType: 'player-manipulate-data-events',
	},
	'request-board-items': {
		route: `request-board-items`,
		schema: newSchemas.requestBoardItemSchema,
		translator: translators.translateRequestBoardItem,
		table: 'request_board_items',
		idField: 'request_board_item_id',
		requiresWorld: false,
	},
};

const newActionDataTypes = {
	'foraging-actions': {
		route: `foraging-actions`,
		schema: newSchemas.foragingActionSchema,
		translator: translators.translateForagingAction,
		table: 'foraging_actions',
		idField: 'foraging_action_id',
		requiresWorld: false,
		oldType: 'interaction-events',
	},
	'crafting-actions': {
		route: `crafting-actions`,
		schema: newSchemas.craftingActionSchema,
		translator: translators.translateCraftingAction,
		table: 'crafting_actions',
		idField: 'crafting_action_id',
		requiresWorld: false,
		oldType: 'interaction-events',
	},
	'giving-actions': {
		route: `giving-actions`,
		schema: newSchemas.givingActionSchema,
		translator: translators.translateGivingAction,
		table: 'giving_actions',
		idField: 'giving_action_id',
		requiresWorld: false,
		oldType: 'interaction-events',
	},
	'patch-actions': {
		route: `patch-actions`,
		schema: newSchemas.patchActionSchema,
		translator: translators.translatePatchAction,
		table: 'patch_actions',
		idField: 'patch_action_id',
		requiresWorld: false,
		oldType: 'patches-events',
	},
	'patch-tending-actions': {
		route: `patch-tending-actions`,
		schema: newSchemas.patchTendingActionSchema,
		translator: translators.translatePatchTendingAction,
		table: 'patch_tending_actions',
		idField: 'patch_tending_action_id',
		requiresWorld: false,
		oldType: 'patches-events',
	},
	'inventory-actions': {
		route: `inventory-actions`,
		schema: newSchemas.inventoryActionSchema,
		translator: translators.translateInventoryAction,
		table: 'inventory_actions',
		idField: 'inventory_action_id',
		requiresWorld: false,
		oldType: 'player-item-interaction-events',
	},
	'data-actions': {
		route: `data-actions`,
		schema: newSchemas.dataActionSchema,
		translator: translators.translateDataAction,
		table: 'data_actions',
		idField: 'data_action_id',
		requiresWorld: false,
		oldType: 'player-manipulate-data-events',
	},
	'creature-direction-actions': {
		route: `creature-direction-actions`,
		schema: newSchemas.creatureDirectionActionSchema,
		translator: translators.translateCreatureDirectionAction,
		table: 'creature_direction_actions',
		idField: 'creature_direction_action_id',
		requiresWorld: false,
		oldType: 'direct-creature-events',
	},
	'diner-review-actions': {
		route: `diner-review-actions`,
		schema: newSchemas.dinerReviewActionSchema,
		translator: translators.translateDinerReviewAction,
		table: 'diner_review_actions',
		idField: 'diner_review_action_id',
		requiresWorld: false,
		oldType: 'diner-rating-events',
	},
	'diner-seating-actions': {
		route: `diner-seating-actions`,
		schema: newSchemas.dinerSeatingActionSchema,
		translator: translators.translateDinerSeatingAction,
		table: 'diner_seating_actions',
		idField: 'diner_seating_action_id',
		requiresWorld: false,
		oldType: 'diner-seating-events',
	},
	'anomaly-readings': {
		route: `anomaly-readings`,
		schema: newSchemas.anomalyReadingSchema,
		translator: translators.translateAnomalyReading,
		table: 'anomaly_readings',
		idField: 'anomaly_reading_id',
		requiresWorld: false,
		oldType: 'anomaly-readings',
	},
	'request-board-actions': {
		route: `request-board-actions`,
		schema: newSchemas.requestBoardActionSchema,
		translator: translators.translateRequestBoardAction,
		table: 'request_board_actions',
		idField: 'request_board_action_id',
		requiresWorld: false,
		oldType: 'request-board-items',
	},
};

const newRecordDataTypes = {
	'weather-records': {
		route: `weather-records`,
		schema: newSchemas.weatherRecordSchema,
		translator: translators.translateWeatherRecord,
		table: 'weather_records',
		idField: 'weather_record_id',
		requiresWorld: false,
		oldType: 'weather-events',
	},
	'patch-health-records': {
		route: `patch-health-records`,
		schema: newSchemas.patchHealthRecordSchema,
		translator: translators.translatePatchHealthRecord,
		table: 'patch_health_records',
		idField: 'patch_health_record_id',
		requiresWorld: false,
		oldType: 'patches-healths',
	},
	'friendship-records': {
		route: `friendship-records`,
		schema: newSchemas.friendshipRecordSchema,
		translator: translators.translateFriendshipRecord,
		table: 'friendship_records',
		idField: 'friendship_record_id',
		requiresWorld: false,
		oldType: 'personal-reputations',
	},
	'player-location-records': {
		route: `player-location-records`,
		schema: newSchemas.playerLocationRecordSchema,
		translator: translators.translatePlayerLocationRecord,
		table: 'player_location_records',
		idField: 'player_location_record_id',
		requiresWorld: false,
		oldType: 'player-move-events',
	},
	'creature-state-records': {
		route: `creature-state-records`,
		schema: newSchemas.creatureStateRecordSchema,
		translator: translators.translateCreatureStateRecord,
		table: 'creature_state_records',
		idField: 'creature_state_record_id',
		requiresWorld: false,
		oldType: 'creature-move-events',
	},
	'creature-activity-records': {
		route: `creature-activity-records`,
		schema: newSchemas.creatureActivityRecordSchema,
		translator: translators.translateCreatureActivityRecord,
		table: 'creature_activity_records',
		idField: 'creature_activity_record_id',
		requiresWorld: false,
		oldType: 'creature-activity-events',
	},
	'imbalance-records': {
		route: `imbalance-records`,
		schema: newSchemas.imbalanceRecordSchema,
		translator: translators.translateImbalanceRecord,
		table: 'imbalance_records',
		idField: 'imbalance_record_id',
		requiresWorld: false,
		oldType: 'imbalance-records',
	},
};

export const newDataTypes = {
	...newInfoDataTypes,
	...newTimeDataTypes,
	...newEntityDataTypes,
	...newActionDataTypes,
	...newRecordDataTypes,
};
