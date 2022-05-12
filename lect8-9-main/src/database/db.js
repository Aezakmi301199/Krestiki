import knex from 'knex'
//import { development } from '../../knexfile';
import {development} from '../../knexfile.js'
 export const dbGame = knex(development);


