// import {openDataBase} from 'react-native-sqlite-storeage';

// export const getDBConnection = async () => {
//     return openDataBase({name: 'EasyMac.db', location: 'default'});

// };

// export const createTables = async (db) => {

//     const goalTable = `CREATE TABLE IF NOT EXISTS goal(
//         goal_id int primary key auto_increment,
//         goal_name varchar(250),
//         percent_change decimal(3,2)
//     );`;

//     const macrosTable = `CREATE TABLE IF NOT EXISTS macros(
//         macros_id int primary key auto_increment,
//         calorie_target int null,
//         fat_target int not null,
//         carb_target int not null,
//         protein_target int not null,
//         water_target int
//     );`;
    

//     const userTable = `CREATE TABLE IF NOT EXISTS 'user'(
//         user_id int primary key auto_increment,
//     username varchar(50) not null,
//     "password" varchar(50) not null,
//     first_name varchar(25) not null,
//     last_name varchar(25) not null,
//     weight_in_lbs decimal,
//     height_in_inches int,
//     age int,
//     sex varchar(25),
//     activity_level int,
//     goal_id int,
// 	constraint fk_goal_id
// 		foreign key (goal_id)
//         references goal(goal_id)
//     );`;

//     const recipeTable =  `CREATE TABLE IF NOT EXISTS recipe(
//     	recipe_id int primary key auto_increment,
//     recipe_name varchar(50) not null,
//     serving_size decimal not null
//     );`;

//     const food_recipeTable =  `CREATE TABLE IF NOT EXISTS food_recipe(
//     	food_recipe_id int primary key auto_increment,
//     food_id int,
//     recipe_id int,
//     constraint fk_food_recipe_food_id
// 		foreign key (food_id)
//         references food(food_id),
// 	constraint fk_food_recipe_recipe_id
// 		foreign key (recipe_id)
//         references recipe(recipe_id),
// 	constraint uq_food_recipe_id
// 		unique(food_id, recipe_id)
//     );`;

    
//     const userFoodTable = `CREATE TABLE IF NOT EXISTS user_food(
//         user_food_id int primary key auto_increment,
//     user_id int,
//     food_id int,
//     constraint fk_user_food_user_id
// 		foreign key (user_id)
//         references "user"(user_id),
// 	constraint fk_user_food_food_id
// 		foreign key (food_id)
// 		references food(food_id),
// 	constraint uq_user_food_id
// 		unique(user_id, food_id)
//     );`;

//     const dietCategoryTable = `CREATE TABLE IF NOT EXISTS diet_category(
//         diet_category_id int primary key auto_increment,
//     diet_name varchar(50) not null,
//     food_id int,
//     recipe_id int, 
//     constraint fk_food_id
// 		foreign key (food_id)
//         references food(food_id),
// 	constraint fk_recipe_id
// 		foreign key (recipe_id)
//         references recipe(recipe_id)
//     );`;

//     const foodLogTable = `CREATE TABLE IF NOT EXISTS food_log(
//         food_log_id int primary key auto_increment,
//         log_date date not null,
//         grams_consumed int not null,
//         food_id int null,
//         recipe_id int null,
//         user_id int null,
//         constraint fk_log_food_id
//             foreign key (food_id)
//             references food(food_id),
//         constraint fk_log_recipe_id
//             foreign key (recipe_id)
//             references recipe(recipe_id),
//         constraint fk_log_user_id
//             foreign key (user_id)
//             references "user"(user_id)
//     );`;

//     await db.executeSql(goalTable);

// }


// export const loadTables = async (db) => {

//     const goalLoad = 'insert into goal (goal_id, goal_name, percent_change) ' +
// 	'values' +
//     '(1, Weight loss, .20),' +
//     '(2, Slow weight loss, .10),'
//     '(3, Maintenance, 0),'
//     '(4, Slow weight gain, .10),'
//     '(5, Weight gain, .20);';

//     db.executeSql(goalLoad);

// }
