import { Schema, Types, connection } from "mongoose"

const settingSchema = new Schema(
    {
        app_name: {
            type: String,
        },
        upi_id: {
            type: String,
        },
        user_name: {
            type: String,
        },
        phone_number: {
            type: String,
        },
        pan_card: {
            type: String,
        },
        short_link: {
            type: String,
        },
    },
    { timestamps: true });
<<<<<<< HEAD
    
=======

>>>>>>> 62934d48deee077498187ff43c56fe045344648a
const Db = connection.useDb("LoanDuplicate");
const Settings = Db.models.Settings || Db.model('Settings', settingSchema);
export default Settings

<<<<<<< HEAD

=======
>>>>>>> 62934d48deee077498187ff43c56fe045344648a
