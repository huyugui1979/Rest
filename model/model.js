/**
 * Created by yuguihu on 15/11/16.
 */
var mongoose = require('mongoose');

var SchoolSchema = new mongoose.Schema(
    {
        name: String,
        colleges:[{type:mongoose.Schema.Types.ObjectId, ref: 'College'}]
    });
var CollegeSchema = new mongoose.Schema(
    {
        name: String,
        professions:[{type:mongoose.Schema.Types.ObjectId, ref: 'Profession'}]
    });
var ProfessionSchema = new mongoose.Schema(
    {
        name: String,
        classes:[{type:mongoose.Schema.Types.ObjectId, ref: 'Class'}]
    });
var ClassSchema = new mongoose.Schema(
    {
        name: String,
        students:[{type:mongoose.Schema.Types.ObjectId, ref: 'Stuent'}]
    });
var StudentSchema = new mongoose.Schema(
    {
        userName: String,
        password:String
    });
var TeacherSchema = new mongoose.Schema(
    {
        name: String,
        password:String
    });
var SignSchema = new mongoose.Schema(
    {
        beginSign:Date,
        endSign:Date,
        schedule:{type:mongoose.Schema.Types.ObjectId, ref: 'Schedule'},
        student:{type:mongoose.Schema.Types.ObjectId, ref: 'student'}

    });
var ScheduleSchema   = new mongoose.Schema(
    {
        beginSchedule:Date,
        endSchedule:Date,
        address:{type:mongoose.Schema.Types.ObjectId, ref: 'Address'},
        subject:{type:mongoose.Schema.Types.ObjectId,ref:'Subject'}
    });
var SubjectSchema = new mongoose.Schema({
        name:String,
        teacher:{type:mongoose.Schema.Types.ObjectId,ref:'Teacher'}
});
var AddressSchema =  new mongoose.Schema(
    {
        lat:Number,
        lng:Number,
        blueNumber:String,
        Name:String
    });

mongoose.model('School', SchoolSchema);
mongoose.model('College', CollegeSchema);
mongoose.model('Profession', ProfessionSchema);
mongoose.model('Class', ClassSchema);
mongoose.model('Student', StudentSchema);
mongoose.model('Teacher', TeacherSchema);
mongoose.model('Sign', SignSchema);
mongoose.model('Schedule', ScheduleSchema);
mongoose.model('Subject', SubjectSchema);
mongoose.model('Address', AddressSchema);

