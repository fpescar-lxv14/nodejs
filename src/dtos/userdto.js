export function UserData(obj){
    this.first_name = obj.first_name ?? ""
    this.last_name = obj.last_name ?? ""
    this.birth_date = obj.birth_date ?? new Date("1900-01-01")
    this.id_type = obj.id_type ?? "DNI"
    this.id_number = obj.id_number ?? "X 0.000.000"
    this.country = obj.country ?? ""
    this.nationality = obj.nationality ?? ""
}